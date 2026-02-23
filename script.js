let jobs = [
  {
    id: 1,
    companyName: 'Meta Platforms',
    position: 'Software Engineer',
    location: 'Menlo Park, CA',
    type: 'Full-time',
    salary: '$50k - $100k',
    description:
      'Develop scalable applications and work on cutting-edge social technologies.',
    status: 'all',
  },
  {
    id: 2,
    companyName: 'Netflix',
    position: 'Data Scientist',
    location: 'Los Gatos, CA',
    type: 'Hybrid',
    salary: '$40k - $80k',
    description:
      'Analyze user behavior data to improve movie recommendation algorithms.',
    status: 'all',
  },
  {
    id: 3,
    companyName: 'Shopify',
    position: 'Product Manager',
    location: 'Remote',
    type: 'Full-time',
    salary: '$20k - $60k',
    description:
      'Lead e-commerce feature development for millions of global merchants.',
    status: 'all',
  },
  {
    id: 4,
    companyName: 'Pathao',
    position: 'Operations Manager',
    location: 'Dhaka, BD',
    type: 'On-site',
    salary: '৳ 60K - 80K',
    description:
      'Manage logistics and operation strategy for ride-sharing services.',
    status: 'all',
  },
  {
    id: 5,
    companyName: 'Tesla',
    position: 'Autopilot Engineer',
    location: 'Palo Alto, CA',
    type: 'Full-time',
    salary: '$60k - $80k',
    description:
      'Enhance self-driving technology using advanced computer vision models.',
    status: 'all',
  },
  {
    id: 6,
    companyName: 'bKash',
    position: 'Security Analyst',
    location: 'Dhaka, BD',
    type: 'Hybrid',
    salary: '৳ 70K - 90K',
    description:
      'Ensure secure financial transactions for millions of mobile users.',
    status: 'all',
  },
  {
    id: 7,
    companyName: 'Amazon',
    position: 'Cloud Engineer',
    location: 'Seattle, WA',
    type: 'Remote',
    salary: '$30k - $70k',
    description:
      'Build and scale infrastructure on AWS for global enterprise clients.',
    status: 'all',
  },
  {
    id: 8,
    companyName: '10 Minute School',
    position: 'Content Creator',
    location: 'Dhaka, BD',
    type: 'On-site',
    salary: '৳ 60k - 80K',
    description:
      'Develop engaging educational materials for students across Bangladesh.',
    status: 'all',
  },
];
let activeTab = 'all';
function renderTracker() {
  const wrapper = document.getElementById('jobWrapper');
  const empty = document.getElementById('emptyPlaceholder');
  const filteredJobs =
    activeTab === 'all' ? jobs : jobs.filter(j => j.status === activeTab);
  document.getElementById('totalCount').textContent = jobs.length;
  document.getElementById('interviewStats').textContent = jobs.filter(
    j => j.status === 'interview',
  ).length;
  document.getElementById('rejectedStats').textContent = jobs.filter(
    j => j.status === 'rejected',
  ).length;
  document.getElementById('tabCount').textContent = filteredJobs.length;
  wrapper.innerHTML = '';
  if (filteredJobs.length === 0) {
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    filteredJobs.forEach(job => {
      const card = document.createElement('div');
      card.className =
        'bg-white border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-shadow relative';

      card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
          <div>
            <h4 class="text-xl font-extrabold text-gray-800">${job.companyName}</h4>
            <p class="text-blue-600 font-semibold text-sm">${job.position}</p>
          </div>
          <button class="delete-btn text-gray-300 hover:text-red-500 transition" data-id="${job.id}">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>

        <div class="flex flex-wrap gap-3 text-xs font-bold text-gray-500 mb-4 uppercase">
          <span class="bg-gray-100 px-2 py-1 rounded">
            <i class="fa-solid fa-location-dot mr-1"></i> ${job.location}
          </span>
          <span class="bg-gray-100 px-2 py-1 rounded">
            <i class="fa-solid fa-clock mr-1"></i> ${job.type}
          </span>
          <span class="bg-green-50 text-green-600 px-2 py-1 rounded">${job.salary}</span>
        </div>

        <p class="text-gray-600 text-sm leading-relaxed mb-6">${job.description}</p>

        <div class="flex gap-3">
          <button class="status-btn flex-1 py-2 rounded-lg font-bold text-sm transition ${job.status === 'interview' ? 'bg-green-500 text-white' : 'border border-green-500 text-green-600 hover:bg-green-50'}" 
                  data-id="${job.id}" data-status="interview">
            Interview
          </button>
          <button class="status-btn flex-1 py-2 rounded-lg font-bold text-sm transition ${job.status === 'rejected' ? 'bg-red-500 text-white' : 'border border-red-500 text-red-600 hover:bg-red-50'}" 
                  data-id="${job.id}" data-status="rejected">
            Rejected
          </button>
        </div>
      `;

      wrapper.appendChild(card);
    });
  }
}
function updateStatus(id, newStatus) {
  jobs = jobs.map(job => {
    if (job.id === id) {
      const updatedStatus = job.status === newStatus ? 'all' : newStatus;
      return { ...job, status: updatedStatus };
    }
    return job;
  });
  renderTracker();
}
renderTracker();
