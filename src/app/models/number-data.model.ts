export interface NumberData {
  modal: {
    numberHeader: NumberHeader;
    table: TableData;
    footer: FooterData;
  };
}

export interface NumberHeader {
  numberDetails: {
    number: string;
    status: string;
  };
  protocol: string;
  country: {
    name: string;
    flag: string;
  };
  currentClient: string;
  supplies: string;
  lastShipmentDate: string;
  currentBalance: string;
  currentClientBalance: string;
  totalUsedBalance: string;
}

export interface TableData {
  data: TableRow[];
}

export interface TableRow {
  client: string;
  dateAssigned: string;
  dateCanceled: string;
  manager: string;
  localMinutes: number;
  internationalMinutes: number;
  amount: string;
}

export interface FooterData {
  author: {
    name: string;
    image: string;
  };
  creationDate: string;
  creationTime: string;
}