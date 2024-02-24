import ms from 'ms'; // Import the 'ms' library to parse timespan strings

export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  const cookieExpireDays = process.env.COOKIE_EXPIRE;
  const jwtExpire = process.env.JWT_EXPIRE;

  // Calculate cookie expiration time
  const cookieExpireMilliseconds = cookieExpireDays * 24 * 60 * 60 * 1000;
  const cookieOptions = {
    expires: new Date(Date.now() + cookieExpireMilliseconds),
    httpOnly: true,
  };

  // Calculate JWT expiration time
  const jwtExpireMilliseconds = ms(jwtExpire); // Parse JWT_EXPIRE using ms library
  if (!jwtExpireMilliseconds) {
    throw new Error('Invalid JWT_EXPIRE value');
  }

  res.status(statusCode)
     .cookie('token', token, { ...cookieOptions, maxAge: cookieExpireMilliseconds }) // Use maxAge instead of expires
     .json({
        success: true,
        user,
        message,
        token,
     });
};
