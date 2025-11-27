app_name = "bloodtestnearme_frontend"
app_title = "Bloodtestnearme Frontend"
app_publisher = "Nitish"
app_description = "Frontend application of blood test near me "
app_email = "nitishmashal0@gmail.com"
app_license = "mit"


# website_route_rules = [
#     # ✅ Allow Frappe system routes
#     {"from_route": "/app/<path:path>", "to_route": "/app/<path:path>"},
#     {"from_route": "/login", "to_route": "/login"},
#     {"from_route": "/api/<path:path>", "to_route": "/api/<path:path>"},
#     {"from_route": "/assets/<path:path>", "to_route": "/assets/<path:path>"},

#     # ✅ Vue SPA routes (redirect all frontend routes to index.html)
#     {"from_route": "/", "to_route": "/"},
#     {"from_route": "/health-checkup-packages", "to_route": "/"},
#     {"from_route": "/blood-test-online", "to_route": "/"},
#     {"from_route": "/CartPage", "to_route": "/"},
#     {"from_route": "/qrcodedata", "to_route": "/"},
#     {"from_route": "/blogspreview", "to_route": "/"},
#     {"from_route": "/blogdetails", "to_route": "/"},
#     {"from_route": "/address", "to_route": "/"},

#     # ✅ Dynamic Vue routes (use path wildcard to handle any dynamic URLs)
#     {"from_route": "/book/<path:path>", "to_route": "/"},
#     {"from_route": "/<path:path>", "to_route": "/"},
# ]

website_route_rules = [
    # ✅ Allow Frappe system & backend routes
    {"from_route": "/app/<path:path>", "to_route": "/app/<path:path>"},
    {"from_route": "/login", "to_route": "/login"},
    {"from_route": "/api/<path:path>", "to_route": "/api/<path:path>"},
    {"from_route": "/assets/<path:path>", "to_route": "/assets/<path:path>"},

    # ✅ Vue SPA base and static routes
    {"from_route": "/", "to_route": "/"},
    {"from_route": "/health-checkup-packages", "to_route": "/"},
    {"from_route": "/blood-test-online", "to_route": "/"},
    {"from_route": "/CartPage", "to_route": "/"},
    {"from_route": "/qrcodedata", "to_route": "/"},
    {"from_route": "/blogspreview", "to_route": "/"},
    {"from_route": "/blogdetails", "to_route": "/"},
    {"from_route": "/add-diagnostic-center", "to_route": "/"},
    {"from_route": "/labs-near-me", "to_route": "/"},
    {"from_route": "/terms-Conditions", "to_route": "/"},
    {"from_route": "/contact-us", "to_route": "/"},
    {"from_route": "/about-us", "to_route": "/"},
    {"from_route": "/privacy-policy", "to_route": "/"},

    # ✅ Dynamic Vue routes (use wildcard to catch nested paths)
    {"from_route": "/book/<path:path>", "to_route": "/"},      # e.g. /book/some-package
    {"from_route": "/<path:path>", "to_route": "/"},           # fallback for dynamic pages like /some-health-package
]


# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "bloodtestnearme_frontend",
# 		"logo": "/assets/bloodtestnearme_frontend/logo.png",
# 		"title": "Bloodtestnearme Frontend",
# 		"route": "/bloodtestnearme_frontend",
# 		"has_permission": "bloodtestnearme_frontend.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/bloodtestnearme_frontend/css/bloodtestnearme_frontend.css"
# app_include_js = "/assets/bloodtestnearme_frontend/js/bloodtestnearme_frontend.js"

# include js, css files in header of web template
# web_include_css = "/assets/bloodtestnearme_frontend/css/bloodtestnearme_frontend.css"
# web_include_js = "/assets/bloodtestnearme_frontend/js/bloodtestnearme_frontend.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "bloodtestnearme_frontend/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "bloodtestnearme_frontend/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "bloodtestnearme_frontend.utils.jinja_methods",
# 	"filters": "bloodtestnearme_frontend.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "bloodtestnearme_frontend.install.before_install"
# after_install = "bloodtestnearme_frontend.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "bloodtestnearme_frontend.uninstall.before_uninstall"
# after_uninstall = "bloodtestnearme_frontend.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "bloodtestnearme_frontend.utils.before_app_install"
# after_app_install = "bloodtestnearme_frontend.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "bloodtestnearme_frontend.utils.before_app_uninstall"
# after_app_uninstall = "bloodtestnearme_frontend.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "bloodtestnearme_frontend.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
# 	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"bloodtestnearme_frontend.tasks.all"
# 	],
# 	"daily": [
# 		"bloodtestnearme_frontend.tasks.daily"
# 	],
# 	"hourly": [
# 		"bloodtestnearme_frontend.tasks.hourly"
# 	],
# 	"weekly": [
# 		"bloodtestnearme_frontend.tasks.weekly"
# 	],
# 	"monthly": [
# 		"bloodtestnearme_frontend.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "bloodtestnearme_frontend.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "bloodtestnearme_frontend.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "bloodtestnearme_frontend.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["bloodtestnearme_frontend.utils.before_request"]
# after_request = ["bloodtestnearme_frontend.utils.after_request"]

# Job Events
# ----------
# before_job = ["bloodtestnearme_frontend.utils.before_job"]
# after_job = ["bloodtestnearme_frontend.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"bloodtestnearme_frontend.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }

