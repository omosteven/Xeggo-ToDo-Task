import AppRoutes from "./AppRoutes";
import { PageTransition } from "./styles/UtilStyles";

function App() {
  return (
    <PageTransition>
      <AppRoutes />
    </PageTransition>
  );
}

export default App;
