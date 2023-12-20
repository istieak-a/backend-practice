const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promiseresolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

// Method - 2
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (err) {
//     res.status(err.code || 5000).json({
//       success: false,
//       error: err.message || "Server Error",
//     });
//   }
// };
