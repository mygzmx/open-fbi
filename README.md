## open-fbi
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### https本地公私钥文件 localhost.pem(证书) localhost-key.pem(密钥)
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout localhost-key.pem -out localhost.pem \
    -subj "/CN=localhost"
    
    

openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
-keyout localhost.key -out localhost.crt \
-subj "/CN=localhost" \
-addext "subjectAltName=DNS:localhost"
```
