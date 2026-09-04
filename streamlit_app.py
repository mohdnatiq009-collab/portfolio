import os
import streamlit as st
import streamlit.components.v1 as components

# Configure page
st.set_page_config(
    page_title="Mohammad Natiq | Portfolio",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom styling to ensure seamless full-viewport presentation
st.markdown("""
<style>
    /* Hide Streamlit default header and footer */
    #MainMenu {visibility: hidden;}
    header[data-testid="stHeader"] {display: none;}
    footer {visibility: hidden;}
    div[data-testid="stDecoration"] {display: none;}
    div[data-testid="stStatusWidget"] {display: none;}
    
    /* Remove padding around main container */
    .block-container {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        max-width: 100% !important;
    }
    
    /* Full viewport iframe */
    iframe {
        width: 100% !important;
        min-height: 100vh !important;
        border: none !important;
        display: block !important;
    }
</style>
""", unsafe_allow_html=True)

PORTFOLIO_URL = "https://mohdnatiq009-collab.github.io/portfolio/"

# Sidebar with quick actions and profile details
with st.sidebar:
    st.title("Mohammad Natiq")
    st.caption("Computer Science & Engineering Student • Aspiring Software Developer")
    st.markdown("---")
    
    st.markdown("### 📬 Quick Connect")
    st.markdown("- **Email:** [mohdnatiq009@gmail.com](mailto:mohdnatiq009@gmail.com)")
    st.markdown("- **Phone:** +91 7451815040")
    st.markdown("- **LinkedIn:** [mohammad-natiq](https://www.linkedin.com/in/mohammad-natiq)")
    st.markdown("- **GitHub:** [mohdnatiq009-collab](https://github.com/mohdnatiq009-collab)")
    st.markdown("- **Location:** LPU, Punjab, India")
    
    st.markdown("---")
    
    # Download Resume button if file exists
    cv_paths = ["Mohammad_Natiq_Professional_CV.pdf", "public/Mohammad_Natiq_Professional_CV.pdf"]
    for cv_path in cv_paths:
        if os.path.exists(cv_path):
            with open(cv_path, "rb") as f:
                st.download_button(
                    label="📄 Download Official CV",
                    data=f.read(),
                    file_name="Mohammad_Natiq_Professional_CV.pdf",
                    mime="application/pdf",
                    use_container_width=True
                )
            break
            
    st.link_button("🚀 Open in Dedicated Tab", PORTFOLIO_URL, use_container_width=True)

# Main area: embed full interactive React portfolio
components.iframe(PORTFOLIO_URL, height=1200, scrolling=True)
