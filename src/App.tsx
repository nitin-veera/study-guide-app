import { router } from './lib/routes';
import { RouterProvider } from "react-router-dom"

import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;