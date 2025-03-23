export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Help Center</h1>
        <p className="text-gray-500">Find answers to common questions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium">How do I add a new claim?</h3>
              <p className="text-gray-600 mt-2">
                To add a new claim, click on the "Add Claim" button in the Claims page. Fill in all the required information and submit the form.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium">How can I track claim status?</h3>
              <p className="text-gray-600 mt-2">
                You can view the status of all claims in the Claims page. Each claim shows its current status and processing stage.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <h3 className="font-medium">How do I update my profile?</h3>
              <p className="text-gray-600 mt-2">
                Go to Settings and Profile to update your personal information and contact details.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Support</h2>
          
          <div className="bg-white p-6 rounded-lg border">
            <p className="text-gray-600 mb-4">
              Need more help? Our support team is available 24/7 to assist you.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:support@vantage.com" className="text-purple-600 hover:underline">
                  support@vantage.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:+1234567890" className="text-purple-600 hover:underline">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Hours:</span>
                <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}