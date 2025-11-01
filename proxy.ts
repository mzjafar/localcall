// ✅ File: proxy.ts
import type { ProxyHandler } from 'next/dist/server/web/proxy-handler';

const proxy: ProxyHandler = () => {
  // We are not using proxy rules right now, so just return undefined.
  return undefined;
};

export default proxy;
