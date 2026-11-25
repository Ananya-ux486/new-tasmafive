import { Download, ExternalLink } from 'lucide-react';

const CATALOGUE_PDF = '/TasmaFive_Services_Catalogue_2026_Redesigned.pdf';

export default function CatalogueView() {
  return (
    <div className="catalogue">
      <div className="cat-cover">
        <div>
          <p className="cat-year">TasmaFive Solutions · 2026</p>
          <h2>Services catalogue</h2>
          <p>View the complete services catalogue below, or open and download the PDF.</p>
        </div>
        <div className="cat-actions no-print">
          <a
            className="btn btn-primary"
            href={CATALOGUE_PDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} /> Open PDF
          </a>
          <a
            className="btn btn-glass"
            href={CATALOGUE_PDF}
            download="TasmaFive_Services_Catalogue_2026_Redesigned.pdf"
          >
            <Download size={18} /> Download PDF
          </a>
        </div>
      </div>

      {/* iframe PDF viewer — hidden on small phones with a mobile-friendly fallback */}
      <div className="catalogue-pdf-frame catalogue-pdf-desktop no-print">
        <iframe
          className="catalogue-pdf"
          src={`${CATALOGUE_PDF}#toolbar=1&navpanes=0&view=FitH`}
          title="TasmaFive Solutions Services Catalogue 2026"
        />
      </div>

      {/* Mobile fallback: show direct open/download buttons instead of broken iframe */}
      <div className="catalogue-mobile-fallback no-print">
        <p>PDF preview is best viewed on a desktop. Use the buttons above to open or download the catalogue.</p>
        <div className="cat-mobile-btns">
          <a
            className="btn btn-primary"
            href={CATALOGUE_PDF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} /> Open Catalogue PDF
          </a>
          <a
            className="btn btn-ghost"
            href={CATALOGUE_PDF}
            download="TasmaFive_Services_Catalogue_2026_Redesigned.pdf"
          >
            <Download size={18} /> Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
