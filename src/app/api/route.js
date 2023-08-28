export default (req, res) => {
    const data = {
      message: 'Welcome to our API!',
      version: '1.0',
    };
  
    res.status(200).json(data);
  };
  