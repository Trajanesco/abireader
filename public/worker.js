const acceptedTypes = ['application/json'];

onmessage = function (event) {
  console.log('[Worker.js] - get file from input');

  if (acceptedTypes.includes(event?.data?.type)) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      try {
        const parsedJson = JSON.parse(event.target.result);
        postMessage(parsedJson);
      } catch (e) {
        console.log('[Worker.js - error] - cant parse file');
      }
    });
    reader.readAsText(event.data);
  }
};
