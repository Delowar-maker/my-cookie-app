export default (req, res) => {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.split(' ')[1];
      const newAuthorizationHeader = `Bearer ${token}`;
      res.setHeader('Authorization', newAuthorizationHeader);
      res.status(200).end();
    } else {
      res.status(401).end();
    }
  };
  