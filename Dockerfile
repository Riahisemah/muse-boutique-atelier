FROM oven/bun:1 AS deps

WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install

FROM deps AS dev

COPY . .

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 8080

CMD ["bun", "run", "dev"]

FROM deps AS build

COPY . .

# Force Nitro to build a standalone Node.js server output instead of the
# default Cloudflare preset used by the Lovable TanStack config.
ENV NITRO_PRESET=node-server
RUN bun run build

FROM node:22-alpine AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

WORKDIR /app

COPY --from=build /app/.output ./.output

EXPOSE 3000

USER node

CMD ["node", ".output/server/index.mjs"]
