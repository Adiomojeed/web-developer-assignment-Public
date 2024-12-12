import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ParentProvider from '@/app/Provider';


const customRender = (ui: any, options?: any) => render(ui, { wrapper: ParentProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };