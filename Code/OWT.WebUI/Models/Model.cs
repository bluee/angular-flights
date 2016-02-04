using System.Data.Entity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.Infrastructure;
using System.ComponentModel.DataAnnotations.Schema;

namespace OWT.WebUI.Model
{
    public class OWTContext : DbContext
    {
        public OWTContext(): base("OWTContextDb")  //name=BlogContextDb
        {
            //Database.SetInitializer(new DropCreateDatabaseAlways<OWTContext>());
            //Database.SetInitializer(new CreateDatabaseIfNotExists<OWTContext>());
            //Database.SetInitializer<OWTContext>(new MigrateDatabaseToLatestVersion<OWTContext,  OWT.WebUI.Migrations.Configuration>());
        }

        public DbSet<FlightDataMock> FlightDataMock { get; set; }
    }


    //As this is mock data the class does not reflect a real world situation
    [Table("FlightDataMock")]
    public class FlightDataMock
    {
        [Key]
        public int FlightId { get; set; }
        public string Carrier { get; set; }
        public string Flight { get; set; }
        public string Depart { get; set; }
        public string Arrive { get; set; }
        public decimal Fare { get; set; }
    }
}