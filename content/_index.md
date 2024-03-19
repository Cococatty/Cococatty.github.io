---
title: 'Cococatty'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: hero
    content:
      title: Welcome to Creative Cat
      text: Cococatty by Carina
      primary_action:
        text: Get Started
        url: mailto:cococatty.ai@outlook.com
        icon: rocket-launch
      # secondary_action:
      #   text: Read the docs
      #   url: https://docs.hugoblox.com
      announcement:
        text: "Announcing the fresh look of this website!"
        link:
          text: "Read more"
          url: "/blogs/new-look"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: bg-triangles.svg
          filters:
            brightness: 0.5
  - block: stats
    content:
      items:
        - statistic: "10+"
          description: |
            Years of Tech Experience
        - statistic: "5+"
          description: |
            Programming, Data Pipeline,
            
            Data Visualization,
            
            Data Science, Computer Vision, NLP
        - statistic: "5"
          description: |
            Languages: 
            
            Cantonese, Mandrain, English, Korean, Spanish
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]
  # - block: features
  #   id: features
  #   content:
  #     title: Key Benefits
  #     # text: Build your future with Carina 🦄
  #     items:
  #       - name: Business Need
  #         icon: magnifying-glass
  #         description: Tell me your painpoints, business questions - I will find the answers for you.
  #       - name: Efficiency
  #         icon: bolt
  #         description: All solutions are designed with high efficiency in cost and performance.
  #       - name: Easy
  #         icon: sparkles
  #         description: One-click to send me a message!
  #       - name: Programming
  #         icon: code-bracket
  #         description: Edit and design your site just using rich text (Markdown) and configurable YAML parameters.
  #       - name: Highly Rated
  #         icon: star
  #         description: Rated 5-stars by the community.
  #       - name: Organized
  #         icon: rectangle-group
  #         description: Have your Projects built in an organized manner with continueous updates.
  - block: cta-image-paragraph
    id: cta
    content:
      items:
        - title: Share your interesting ideas with Carina
          text: As a thanks, get your ideas implemented at low or ZERO costs!
          # Upload image to `assets/media/` and reference the filename here
          # replace image with multiple thumbnails
          image: ai-projects.jpg
          button:
            text: Get Started
            url: mailto:cococatty.ai@outlook.com
        - title: Cococatty
          text: Build your next projects with Carina 🦄
          feature_icon: bolt
          features:
            - "Requirements Checked - business needs are well-listened"
            - "Tailored Design - to fit different budgts and goals"
            - "Future-proof - all designs come with sustainable maintenance plans"
          # Upload image to `assets/media/` and reference the filename here
          image: cococatty-panda-cat.png
          button:
            text: Talk to Carina
            url: mailto:cococatty.ai@outlook.com
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: cta-card
    content:
      title: Got an interesting idea?
      # text: !
      button:
        text: Let Carina know 🤩
        url: mailto:cococatty.ai@outlook.com
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""

---
