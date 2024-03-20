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
  - block: features
    id: features
    content:
      title: Personal Highlights 🌟
      items:
        - name: Proficiency
          icon: star
          description: 10+ Years of Tech Experience
        - name: R&D
          icon: magnifying-glass
          description: 3 Work-In-Progress Projects
        - name: Achievements
          icon: rectangle-group
          description: 3 Publised Projects
        - name: Efficiency
          icon: bolt
          description: Projects are completed in detail-orientated manner along with high-quality results.
        - name: Broad Domains
          icon: code-bracket
          description: Programming, Data Pipeline, Data Visualization, Data Science, Computer Vision, NLP
        - name: Multi-lingo
          icon: sparkles
          description: Cantonese, Mandrain, English, Korean, Spanish

    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      # Reduce spacing
      spacing:
        padding: ["1rem", 0, "1rem", 0]

  - block: cta-image-paragraph
    id: cta
    content:
      items:
        - title: Cococatty
          text: Build your next projects with Carina 🦄
          feature_icon: bolt
          features:
            - "Requirements Checked - business needs are well-listened"
            - "Tailored Design - fitting different budgts and goals"
            - "Future-proof - all designs come with sustainable maintenance plans"
          # Upload image to `assets/media/` and reference the filename here
          image: cococatty-panda-cat.png
          button:
            text: Talk to Carina
            url: mailto:cococatty.ai@outlook.com
      design:
        # Section background color (CSS class)
        css_class: "bg-gray-100 dark:bg-gray-900"
        
  # - block:  cta-button-list
  #   content:
  #     # Need a custom icon?
  #     # Add an SVG image to the `assets/media/icons/` folder and reference it in the `icon` field below
  #     buttons:        
  #       - text: Let Carina know 🤩
  #         icon: rocket-launch
  #         url: mailto:cococatty.ai@outlook.com
  #       - text: See her Work
  #         icon: puzzle-piece
  #         url: /projects
  - block: hero
    content:
      title: Share your interesting ideas
      text: As a thanks, get your ideas implemented at low or ZERO costs!
      # image: ai-projects.jpg
      primary_action:
        text: Let Carina know 🤩
        url: mailto:cococatty.ai@outlook.com
      secondary_action:
        text: See her Work
        url: /projects
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
          filename: ai-projects1024_crop.jpg
          filters:
            brightness: 0.5
      # card:
      #   # Card background color (CSS class)
      #   css_class: "bg-primary-200"
      #   css_style: ""     

---
