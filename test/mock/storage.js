const storageInstance = {
  getAllTellers: async () => [
    [
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb622',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb623',
    ],
  ],
  getZone: async (data) => {
    const _42 = [
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb622',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb623',
    ];
    const _101 = [
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb621',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb622',
      '0x0c6dd5b28707a045f3a0c7429ed3fb9f835cb623',
    ];
    return data === 42 ? _42 : _101;
  },
};

export default storageInstance;
