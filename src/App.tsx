import { RootProvider } from './providers/root';
import { Router } from './routes';

export function App() {
  return (
    <RootProvider>
      <Router />
    </RootProvider>
  );
}
