import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Real-time Steam Profile & Games fetch API
  app.get("/api/steam-sync", async (req, res) => {
    try {
      const steamUrl = "https://steamcommunity.com/profiles/76561198177113007?xml=1";
      const response = await fetch(steamUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          "Accept": "text/xml,application/xml"
        }
      });

      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch Steam data" });
      }

      const xml = await response.text();

      const steamID64 = xml.match(/<steamID64>(.*?)<\/steamID64>/)?.[1] || "76561198177113007";
      const steamID = xml.match(/<steamID><!\[CDATA\[(.*?)\]\]><\/steamID>/)?.[1] || "마살라";
      const onlineState = xml.match(/<onlineState>(.*?)<\/onlineState>/)?.[1] || "offline";
      const stateMessage = xml.match(/<stateMessage><!\[CDATA\[(.*?)\]\]><\/stateMessage>/)?.[1] || "Offline";
      const avatarMedium = xml.match(/<avatarMedium><!\[CDATA\[(.*?)\]\]><\/avatarMedium>/)?.[1] || "";
      const avatarFull = xml.match(/<avatarFull><!\[CDATA\[(.*?)\]\]><\/avatarFull>/)?.[1] || "";
      const memberSince = xml.match(/<memberSince>(.*?)<\/memberSince>/)?.[1] || "February 1, 2015";
      const location = xml.match(/<location><!\[CDATA\[(.*?)\]\]><\/location>/)?.[1] || "Korea, Republic of";

      const games: Array<{
        appId: string;
        name: string;
        link: string;
        icon: string;
        logo: string;
        hours2wk: number;
        hoursTotal: number;
      }> = [];

      const gameRegex = /<mostPlayedGame>([\s\S]*?)<\/mostPlayedGame>/g;
      let match;
      while ((match = gameRegex.exec(xml)) !== null) {
        const block = match[1];
        const name = block.match(/<gameName><!\[CDATA\[(.*?)\]\]><\/gameName>/)?.[1] || "";
        const link = block.match(/<gameLink><!\[CDATA\[(.*?)\]\]><\/gameLink>/)?.[1] || "";
        const icon = block.match(/<gameIcon><!\[CDATA\[(.*?)\]\]><\/gameIcon>/)?.[1] || "";
        const logo = block.match(/<gameLogo><!\[CDATA\[(.*?)\]\]><\/gameLogo>/)?.[1] || "";
        const hours2wk = block.match(/<hoursPlayed>(.*?)<\/hoursPlayed>/)?.[1] || "0";
        const hoursTotal = block.match(/<hoursOnRecord>(.*?)<\/hoursOnRecord>/)?.[1] || "0";
        const appId = link.match(/\/app\/(\d+)/)?.[1] || "";

        games.push({
          appId,
          name,
          link,
          icon,
          logo,
          hours2wk: parseFloat(hours2wk),
          hoursTotal: parseFloat(hoursTotal)
        });
      }

      // Sort by total playtime descending
      games.sort((a, b) => b.hoursTotal - a.hoursTotal);

      return res.json({
        success: true,
        updatedAt: new Date().toISOString(),
        profile: {
          steamID64,
          steamID,
          onlineState,
          stateMessage,
          avatarMedium,
          avatarFull,
          memberSince,
          location,
          games
        }
      });
    } catch (err: any) {
      console.error("Steam sync error:", err);
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware in dev or static in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
