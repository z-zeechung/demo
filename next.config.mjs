import webpack from "webpack";
import { createRequire } from 'module';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const require = createRequire(import.meta.url);
    
        config.module.rules = [{
          test: /\.vue$/,
          use: ['vue-loader']
        }].concat(config.module.rules)
  
        config.plugins.push(new (require('veaury/webpack/VeauryVuePlugin')))
        
        return config;
    }
};

export default nextConfig;
