export class CrediCardRequest {
    customerId: string;
    agentId: string;
    cardType: string;
    requestedDate : string;
  
    constructor(customerId: string, agentId: string, cardType: string, requestedDate : string) {
      this.customerId = customerId;
      this.agentId = agentId;
      this.cardType = cardType;
      this.requestedDate = requestedDate;
    }
  }
  