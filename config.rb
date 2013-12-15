# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "img"
javascripts_dir = "js"
font_dir = "font"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
http_images_dir = 'hisho/img/'

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Add custom fantions
module SassExtention
  def str_replace(str, find, rep)
    assert_type str, :String
    assert_type find, :String
    assert_type rep, :String
    result = str.value.sub(find.value, rep.value)
    Sass::Script::String.new(result)
  end
end

module Sass::Script::Functions
  include SassExtention
end