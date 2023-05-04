module Jekyll
    module RemoveSlashs
        def remove_slashes(url)
            url.gsub(/\//, '')
        end
    end
end
  
Liquid::Template.register_filter(Jekyll::RemoveSlashs)