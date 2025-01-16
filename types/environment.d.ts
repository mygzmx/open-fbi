declare namespace NodeJS {
  interface ProcessEnv {
    // DATABASE_URL: string;
    NODE_ENV: 'development' | 'production';
  }
}

// type Errors = string[]
declare let window: typeof Window & globalThis
declare const google: globalThis.google & any;

interface Window {
  google: any;
}
