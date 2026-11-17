import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  componentName?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `ErrorBoundary caught an error in [${this.props.componentName || 'Component'}]:`,
      error,
      errorInfo
    );
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="my-4 rounded border border-border bg-background-surface p-4 font-mono text-sm text-foreground-secondary">
          <p className="font-semibold text-crimson">
            [SYS_ERR] Failed to render visual module:{' '}
            {this.props.componentName || 'Visual Component'}
          </p>
          <p className="mt-1 text-xs text-foreground-muted">
            Graceful fallback engaged. Functionality remains accessible.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
