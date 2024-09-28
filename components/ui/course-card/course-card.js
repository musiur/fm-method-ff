class CourseCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        const title = this.getAttribute('title') || 'Default Title';
        const content = this.getAttribute('content') || 'Default content';
        const imageUrl = this.getAttribute('image-url') || 'https://via.placeholder.com/300x200';
        const customClasses = this.getAttribute('class') || '';

        const htmlContent = await this.getHtmlContent();
        const styles = await this.getStyles();

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            ${htmlContent}
        `;

        // Apply custom classes and populate content
        const card = this.shadowRoot.querySelector('.card');
        card.className = `card ${customClasses}`;
        this.shadowRoot.querySelector('.card-img-top').src = imageUrl;
        this.shadowRoot.querySelector('.card-img-top').alt = title;
        this.shadowRoot.querySelector('.card-title').textContent = title;
        this.shadowRoot.querySelector('.card-text').textContent = content;
    }

    async getHtmlContent() {
        const response = await fetch('/components/ui/course-card/course-card.html');
        return await response.text();
    }

    async getStyles() {
        const response = await fetch('/components/ui/course-card/course-card.css');
        return await response.text();
    }
}

customElements.define('course-card', CourseCard);