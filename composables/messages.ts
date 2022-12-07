import { useWebSocket } from "@vueuse/core";
import ReconnectingWebSocket from "reconnecting-websocket";
export const useMessages = () => {
  const messages = ref([]);
  const sendMessage = ref((_: any) => {});
  const ws = ref(null);

  onMounted(() => {
    const config = useRuntimeConfig();
    // const { ws: websocket, send } = useWebSocket(config.public.wsUrl, {
    //   autoReconnect: true,
    // });
    const websocket = new ReconnectingWebSocket("wss://data.elektron.art");

    websocket.addEventListener("message", ({ data }) => {
      const message = JSON.parse(data);
      messages.value.push(message);
    });
    ws.value = websocket;
    sendMessage.value = (message: any) =>
      websocket.send(
        JSON.stringify({
          id: randomString(),
          datetime: new Date().toISOString(),
          ...message,
        })
      );
  });
  return { messages, sendMessage, ws };
};
