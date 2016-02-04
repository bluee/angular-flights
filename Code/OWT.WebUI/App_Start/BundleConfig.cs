using System.Web;
using System.Web.Optimization;

namespace OWT.WebUI
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-route.js",
                      "~/Scripts/angular-sanitize.min.js",
                      "~/Scripts/pickadate/picker.js",
                      "~/Scripts/pickadate/picker.date.js",
                      "~/Scripts/ng-pickadate.js",
                      "~/Scripts/moment.js",
                      "~/Scripts/underscore.js",
                      "~/Scripts/loading-bar.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Scripts/pickadate/themes/classic.css",
                      "~/Scripts/pickadate/themes/classic.date.css",
                      "~/Content/loading-bar.js"
                      ));
        }
    }
}
