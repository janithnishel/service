import { useEffect } from "react";

export const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://links.clientflowcrm.com.au/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Need a More Customised Service?
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you have a major migration, a highly customised tech
              project, or just want to hire a TechSpert by the hour, let us help
              you with a custom quote.
            </p>
          </div>

          <iframe
            src="https://links.clientflowcrm.com.au/widget/form/2PT11Incg1RQHDkKKqU1"
            style={{
              width: "100%",
              height: "1530px",
              border: "none",
              borderRadius: "8px",
            }}
            id="inline-2PT11Incg1RQHDkKKqU1"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Sri Lanka Service"
            data-height="1530"
            data-layout-iframe-id="inline-2PT11Incg1RQHDkKKqU1"
            data-form-id="2PT11Incg1RQHDkKKqU1"
            data-cookie-consent="true"
            data-cookie-consent-provider="auto"
            title="Sri Lanka Service"
          />
        </div>
      </div>
    </section>
  );
};
