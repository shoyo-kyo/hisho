# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
http_images_dir = 'hisho_1.0/'

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Add custom fantions
# Add custom fantions
 
module SassExtention
	def replace(search_cond, replace_str, str)
		assert_type search_cond, :String
		assert_type replace_str, :String
		assert_type str, :String

		begin
			replace = eval "lambda { " + replace_str.value + " }"
		rescue
			replace = replace_str.value
		end

		is_proc = replace.class == Proc

		begin
			search = eval search_cond.value
		rescue
			search = search_cond.value
		end

		if (search_cond.class == Regexp) then
			val = is_proc ?
			str.value.gsub(search, &replace) :
			str.value.gsub(search, replace)
		else
		val = is_proc ?
			str.value.sub(search, &replace) :
			str.value.sub(search, replace)
		end

		Sass::Script::String.new(val)
	end
end

module Sass::Script::Functions
	include SassExtention
end