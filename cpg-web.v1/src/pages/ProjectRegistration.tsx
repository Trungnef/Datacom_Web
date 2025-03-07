import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../store/slices/projectSlice';
import { RootState } from '../store';
import { AlertCircle } from 'lucide-react';

const ProjectRegistration: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.projects);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    productType: '',
    allergens: [] as string[],
    certifications: [] as string[],
    productionVolume: 0,
    timeline: '',
    budget: 0,
  });

  const [formErrors, setFormErrors] = useState({
    title: '',
    description: '',
    productType: '',
    productionVolume: '',
    timeline: '',
    budget: '',
  });

  // Sample data for form options
  const productTypes = ['Beverages', 'Snacks', 'Dairy', 'Bakery', 'Condiments', 'Frozen Foods'];
  const allergensList = ['Gluten', 'Dairy', 'Nuts', 'Soy', 'Eggs', 'Shellfish'];
  const certificationsList = ['Organic', 'Non-GMO', 'Kosher', 'Halal', 'Vegan', 'Fair Trade'];
  const timelineOptions = ['1-3 months', '3-6 months', '6-12 months', '12+ months'];

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    let valid = true;
    const errors = {
      title: '',
      description: '',
      productType: '',
      productionVolume: '',
      timeline: '',
      budget: '',
    };

    if (!formData.title.trim()) {
      errors.title = 'Project title is required';
      valid = false;
    }

    if (!formData.description.trim()) {
      errors.description = 'Project description is required';
      valid = false;
    }

    if (!formData.productType) {
      errors.productType = 'Product type is required';
      valid = false;
    }

    if (formData.productionVolume <= 0) {
      errors.productionVolume = 'Production volume must be greater than 0';
      valid = false;
    }

    if (!formData.timeline) {
      errors.timeline = 'Timeline is required';
      valid = false;
    }

    if (formData.budget <= 0) {
      errors.budget = 'Budget must be greater than 0';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'productionVolume' || name === 'budget' ? Number(value) : value,
    });
  };

  const handleCheckboxChange = (type: 'allergens' | 'certifications', value: string) => {
    const currentValues = formData[type];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    setFormData({
      ...formData,
      [type]: updatedValues,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(createProject(formData) as any)
        .then((result: any) => {
          if (!result.error) {
            navigate('/dashboard');
          }
        });
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Register a New Project</h1>
        <p className="text-gray-600">
          Provide details about your project to find the perfect manufacturing partners.
        </p>
      </div>

      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Project Title *
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.title ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            />
            {formErrors.title && <p className="mt-2 text-sm text-red-600">{formErrors.title}</p>}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.description ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
              placeholder="Describe your project, including key requirements and goals..."
            />
            {formErrors.description && (
              <p className="mt-2 text-sm text-red-600">{formErrors.description}</p>
            )}
          </div>

          <div>
            <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
              Product Type *
            </label>
            <select
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.productType ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            >
              <option value="">Select a product type</option>
              {productTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {formErrors.productType && (
              <p className="mt-2 text-sm text-red-600">{formErrors.productType}</p>
            )}
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">Allergen Requirements</legend>
              <p className="text-xs text-gray-500 mb-2">
                Select allergens that must NOT be present in the product
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {allergensList.map((allergen) => (
                  <div key={allergen} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={`allergen-${allergen}`}
                        name={`allergen-${allergen}`}
                        type="checkbox"
                        checked={formData.allergens.includes(allergen)}
                        onChange={() => handleCheckboxChange('allergens', allergen)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`allergen-${allergen}`} className="text-gray-700">
                        {allergen}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <fieldset>
              <legend className="text-sm font-medium text-gray-700">Required Certifications</legend>
              <p className="text-xs text-gray-500 mb-2">
                Select certifications that the manufacturer must have
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {certificationsList.map((certification) => (
                  <div key={certification} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={`certification-${certification}`}
                        name={`certification-${certification}`}
                        type="checkbox"
                        checked={formData.certifications.includes(certification)}
                        onChange={() => handleCheckboxChange('certifications', certification)}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={`certification-${certification}`} className="text-gray-700">
                        {certification}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <label htmlFor="productionVolume" className="block text-sm font-medium text-gray-700">
              Estimated Production Volume (units) *
            </label>
            <input
              type="number"
              name="productionVolume"
              id="productionVolume"
              min="1"
              value={formData.productionVolume}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.productionVolume ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            />
            {formErrors.productionVolume && (
              <p className="mt-2 text-sm text-red-600">{formErrors.productionVolume}</p>
            )}
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
              Project Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.timeline ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            >
              <option value="">Select a timeline</option>
              {timelineOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {formErrors.timeline && (
              <p className="mt-2 text-sm text-red-600">{formErrors.timeline}</p>
            )}
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget (USD) *
            </label>
            <input
              type="number"
              name="budget"
              id="budget"
              min="1"
              value={formData.budget}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md shadow-sm ${
                formErrors.budget ? 'border-red-300' : 'border-gray-300'
              } focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
            />
            {formErrors.budget && <p className="mt-2 text-sm text-red-600">{formErrors.budget}</p>}
          </div>

          <div className="pt-4 border-t border-gray-200 flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectRegistration;