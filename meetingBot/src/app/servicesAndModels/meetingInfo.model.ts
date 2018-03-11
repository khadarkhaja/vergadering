
export class MeetingInfo{
    
        constructor(public id:number, public Meeting_Title:string, public RequestorID:number,
            public Priority:string , public InitiatingTime:Date, public BOT_Nr_Replan:number,  
            public REQ_Nr_Replan:number, public TYPE:Boolean ,    public PreferedStartDT:Date , 
            public PreferEndDT:Date ,public PreferStartTM:Date , public PreferEndTM:Date , public RoomReq:Boolean , 
            public RoomID:number ,
            public NrParticipants:number , public Planned_YN:String, public MeetingDuration
            , public PlannedDT:Date , public PlannnedTM:Date
        ){
    
        }
    }
    