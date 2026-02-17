# Deploy API to Render/Railway

## Render (Recommended - Free tier available)

1. Go to https://render.com and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select the `simple_api` folder as Root Directory
5. Settings:
   - **Name**: `home-project-api` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `simple_api`
6. Add Environment Variable:
   - **Key**: `JWT_SECRET`
   - **Value**: (generate a random string, e.g., `openssl rand -hex 32`)
7. Click "Create Web Service"
8. Copy the URL (e.g., `https://home-project-api.onrender.com`)
9. Use this URL in your Next.js app: `NEXT_PUBLIC_API_URL=https://home-project-api.onrender.com/api`

## Railway (Alternative)

1. Go to https://railway.app and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Settings:
   - **Root Directory**: `simple_api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variable:
   - **Key**: `JWT_SECRET`
   - **Value**: (generate a random string)
6. Deploy
7. Copy the generated URL and use it in Next.js

## Important Notes

- The API will be available at: `https://your-api-url.onrender.com/api`
- Make sure to update `NEXT_PUBLIC_API_URL` in Vercel with the full URL including `/api`
- The `data/users.json` file will be created automatically on first run
- For production, consider using a proper database instead of JSON file

