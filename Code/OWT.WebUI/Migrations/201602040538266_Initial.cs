namespace OWT.WebUI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.FlightDataMock",
                c => new
                    {
                        FlightId = c.Int(nullable: false, identity: true),
                        Carrier = c.String(),
                        Flight = c.String(),
                        Depart = c.String(),
                        Arrive = c.String(),
                        Fare = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.FlightId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.FlightDataMock");
        }
    }
}
