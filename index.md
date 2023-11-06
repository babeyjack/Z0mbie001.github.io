---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---
# Welcome to my website

This is a place for me to display the software I create and document my software programming journey. 


## Dev Log Posts
<ul>
    {% for post in site.posts %}
    <li>
        <a href="{{post.url}}">{{post.title}}</a>
    </li>
    {% end for %}
</ul>