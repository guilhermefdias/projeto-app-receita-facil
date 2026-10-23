import axios from "axios";

/*
  No celular físico, localhost não funciona.
  Use o mesmo IP da sua máquina na rede Wi-Fi (o Expo mostra em Metro: exp://IP:8081)
  e suba a API com: npx json-server --watch db.json --port 3000 --host 0.0.0.0
*/

const api = axios.create({
  baseURL: "http://192.168.68.106:3000/",
});

export default api;
