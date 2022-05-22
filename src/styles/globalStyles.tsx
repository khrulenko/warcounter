const globalStyles = {
  global: {
    '*': {
      boxSizing: 'border-box',

      '&::selection': {
        backgroundColor: 'red.main',
        color: 'black',
      }
    },
    'html, body, #root': {
      height: '100%',
      margin: '0px',
      overflow: 'hidden',
    },
    body: {
      width: '100vw',
      padding: '40px',
      backgroundColor: 'black',
    },
  },
};

export default globalStyles;
