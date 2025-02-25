export default interface ITransaction {
  id: number;
  type: string;
  direction: string;
  amount: number;
  name: string;
  description: string;
  datetime: string;
  status: string;
  supplier?: string | null;
  icon: string;
}
