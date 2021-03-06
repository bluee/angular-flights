﻿using OWT.WebUI.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace OWT.WebUI
{
    public class FlightsController : ApiController
    {
        /// <summary>
        /// Return list of sample flights. Currently ignores any search parameters due to small mock sample size
        /// </summary>
        /// <returns></returns>
        // GET api/<controller>
        public IEnumerable<FlightDataMock> Get()
        {
            using (var db = new OWTContext())
            {
                return db.FlightDataMock.ToList();
            }

        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}