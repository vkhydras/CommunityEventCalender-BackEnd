const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    // Set a default status code for the error response(500 for server error)
    let statusCode = 500;
  
    // Check if the error has a specific status code
    if (err.statusCode) {
      statusCode = err.statusCode;
    }
  
    // Return the error response with the defaulr status code(500)
    res.status(statusCode).json({ error: err.message });
  };
  
  module.exports = errorHandler;
  