using System;
using System.Net.Http;
using Microsoft.Owin.Hosting;

namespace PlayGroundForWebApps 
{ 
    public class Program 
    { 
        static void Main() 
        { 
            string baseAddress = "http://localhost:9000/"; 

            // Start OWIN host 
            using (WebApp.Start<Startup>(url: baseAddress))
            {

              /*  // Create HttpCient and make a request to api/values 
                HttpClient client = new HttpClient();
                var response = client.GetAsync(baseAddress + "api/heroes").Result;
                Console.WriteLine(response);
                Console.WriteLine(response.Content.ReadAsStringAsync().Result);*/

                //System.Diagnostics.Process.Start(baseAddress);

                Console.WriteLine("Server is started.");


                Console.ReadLine();
            }
        } 
    } 
 } 
