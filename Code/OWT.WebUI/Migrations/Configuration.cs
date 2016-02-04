namespace OWT.WebUI.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<OWT.WebUI.Model.OWTContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(OWT.WebUI.Model.OWTContext context)
        {
            context.FlightDataMock.AddOrUpdate(
              p => p.FlightId,
              new Model.FlightDataMock { Carrier = "TigerAir", Flight="TT300", Depart="06:00", Arrive="08:00", Fare=80 },
              new Model.FlightDataMock { Carrier = "TigerAir", Flight = "TT301", Depart = "07:00", Arrive = "09:00", Fare = 80 },
              new Model.FlightDataMock { Carrier = "Virgin", Flight = "VA123", Depart = "06:00", Arrive = "08:00", Fare = 90 },
              new Model.FlightDataMock { Carrier = "JetStar", Flight = "JQ777", Depart = "06:00", Arrive = "08:00", Fare = 95 },
              new Model.FlightDataMock { Carrier = "Qantas", Flight = "QF14", Depart = "08:00", Arrive = "10:00", Fare = 110 }
            );

        }
    }
}
