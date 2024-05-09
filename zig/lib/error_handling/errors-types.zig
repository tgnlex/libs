const FileOpenError = error{
  AccessDenied, 
  OutOfMemory,
  FileNotFound,
};

const AllocationError = error{OutOfMemory}; 

