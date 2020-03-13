export namespace ButtonTypes {
  export interface IProps {
    title: string,
    to?: string,
    onClick?(): void,
  }
}