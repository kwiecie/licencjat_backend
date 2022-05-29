module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afca0056575b904ac741ed9795e0b675'),
  },
});
