// ========== 강좌 데이터 ==========
const coursesData = {
	CS101: {
		id: 'CS101',
		code: 'CS101',
		section: 'A',
		classification: '교필',
		name: '자료구조',
		professors: ['김태현'],
		time: '월 09:00-10:15; 수 09:00-10:00',
		schedule: '2,09:00,10:15;4,09:00,10:00',
		credits: 3,
		students: 35,
		capacity: 40,
		description:
			'컴퓨터 과학의 기초가 되는 자료구조를 학습합니다. 배열, 연결 리스트, 스택, 큐 등을 다룹니다.',
		room: '18409',
		eligibleYears: ['1'],
		majors: ['컴퓨터공학', '소프트웨어', '데이터사이언스'],
		syllabusUrl: './syllabus-CS101.html',
	},
	CS102: {
		id: 'CS102',
		code: 'CS102',
		section: 'B',
		classification: '교선',
		name: '시스템 프로그래밍',
		professors: ['이성우'],
		time: '화 11:30-12:45; 목 11:30-12:45',
		schedule: '3,11:30,12:45;5,11:30,12:45',
		credits: 3,
		students: 28,
		capacity: 30,
		description: '운영체제와 저수준 프로그래밍을 통해 시스템의 동작 원리를 이해합니다.',
		room: '3207',
		eligibleYears: ['2'],
		majors: ['컴퓨터공학', '사이버보안'],
		syllabusUrl: './syllabus-CS102.html',
	},
	AI201: {
		id: 'AI201',
		code: 'AI201',
		section: 'E2',
		classification: '전선',
		name: 'AI 입문',
		professors: ['박현배'],
		time: '월 14:15-16:15',
		schedule: '2,14:15,16:15',
		credits: 2,
		students: 42,
		capacity: 45,
		description: '인공지능의 기초 개념과 머신러닝의 핵심을 학습합니다.',
		room: '18419',
		eligibleYears: ['1', '2', '3'],
		majors: ['인공지능', '컴퓨터공학'],
		syllabusUrl: './syllabus-AI201.html',
	},
	MATH05: {
		id: 'MATH05',
		code: 'MATH05',
		section: 'X2',
		classification: '전필',
		name: '이산수학',
		professors: ['최영재'],
		time: '수 14:15-16:15; 목 15:30-16:30',
		schedule: '4,14:15,16:15;5,15:30,16:30',
		credits: 3,
		students: 38,
		capacity: 40,
		description:
			'컴퓨터 과학에 필요한 이산수학의 이론을 습득합니다. 집합, 그래프, 논리 등을 다룹니다.',
		room: '18409',
		eligibleYears: ['3', '4'],
		majors: ['컴퓨터공학', '데이터사이언스'],
		syllabusUrl: './syllabus-MATH05.html',
	},
	ENG10: {
		id: 'ENG10',
		code: 'ENG10',
		section: 'A3',
		classification: '교필',
		name: '학술 영어',
		professors: ['James Smith', 'Emily Davis'],
		time: '금 10:15-12:15',
		schedule: '6,10:15,12:15',
		credits: 2,
		students: 25,
		capacity: 30,
		description: '학술 논문 작성과 프레젠테이션을 위한 영어를 학습합니다.',
		room: '18419',
		eligibleYears: ['3'],
		majors: ['인문학', '교육학'],
		syllabusUrl: './syllabus-ENG10.html',
	},
}

const courseLookup = coursesData
const courseListData = Object.values(courseLookup)

// ========== Professor profiles (keyed by displayed professor string) ==========
const professorProfiles = {
	김태현: {
		photo: './assets/prof-kim.jpg',
		name: '김태현',
		title: 'Associate Professor',
		department: 'Computer Science',
		lab: 'Algorithms Lab (H201)',
		phone: '+82-2-1234-5678',
		email: 'taekim@univ.edu',
		researchAreas: ['Data Structures', 'Algorithms', 'Parallel Computing'],
		experience: [
			'2010-2015: Researcher at KIST',
			'2016-현재: Associate Professor at University',
		],
		projects: ['2018-2019 (PI) FastGraph: Graph processing framework'],
		patents: ['2019, KIPO, KR20190012345, FastGraph partitioning'],
		books: ['Advanced Data Structures (2020)'],
		awards: ['Best Paper, ICALP 2017'],
		degrees: ['B.S. 2005 Seoul Univ', 'Ph.D. 2011 MIT'],
		theses: ['2011: Scalable Graph Algorithms (Ph.D thesis)'],
		coursesTaught: ['CS101 자료구조', 'CS405 고급 알고리즘'],
	},
	이성우: {
		photo: './assets/prof-lee.jpg',
		name: '이성우',
		title: 'Professor',
		department: 'Computer Engineering',
		lab: 'Systems Lab (C305)',
		phone: '+82-2-2345-6789',
		email: 'slee@univ.edu',
		researchAreas: ['Operating Systems', 'Low-level Systems'],
		experience: ['2008-2014: Engineer at Samsung', '2015-현재: Professor at University'],
		projects: ['2019-2021 (Co-PI) SecureOS: Secure operating system'],
		patents: ['2020, KIPO, KR20200054321, Secure context switch'],
		books: ['Systems Programming in Practice (2018)'],
		awards: ['Teaching Award 2020'],
		degrees: ['B.S. 2002 KAIST', 'Ph.D. 2009 Stanford'],
		theses: ['2009: Kernel optimizations (Ph.D thesis)'],
		coursesTaught: ['CS102 시스템 프로그래밍', 'CS310 운영체제'],
	},
	박현배: {
		photo: './assets/prof-park.jpg',
		name: '박현배',
		title: 'Assistant Professor',
		department: 'AI',
		lab: 'AI Lab (D102)',
		phone: '+82-2-3456-7890',
		email: 'hbpark@univ.edu',
		researchAreas: ['Machine Learning', 'Computer Vision'],
		experience: ['2014-2018: Postdoc at KAIST', '2019-현재: Assistant Professor at University'],
		projects: ['2020- (PI) VisionNet: Efficient image models'],
		patents: ['2021, KIPO, KR20210098765, Image compression method'],
		books: [],
		awards: ['Young Researcher Award 2022'],
		degrees: ['B.S. 2010 Seoul Univ', 'Ph.D. 2016 KAIST'],
		theses: ['2016: Deep models for image segmentation'],
		coursesTaught: ['AI201 AI 입문'],
	},
	최영재: {
		photo: './assets/prof-choi.jpg',
		name: '최영재',
		title: 'Professor',
		department: 'Mathematics',
		lab: 'Discrete Math Group (B210)',
		phone: '+82-2-4567-8901',
		email: 'ychoi@univ.edu',
		researchAreas: ['Graph Theory', 'Logic'],
		experience: ['2006-2012: Lecturer at University', '2013-현재: Professor at University'],
		projects: [],
		patents: [],
		books: ['Discrete Mathematics for Computing (2015)'],
		awards: [],
		degrees: ['B.S. 2000 Seoul Univ', 'Ph.D. 2006 Princeton'],
		theses: [],
		coursesTaught: ['MATH05 이산수학'],
	},
	'James Smith': {
		photo: './assets/prof-smith.jpg',
		name: 'James Smith',
		title: 'Lecturer',
		department: 'English',
		lab: '',
		phone: '+82-2-5678-9012',
		email: 'jsmith@univ.edu',
		researchAreas: ['Academic Writing'],
		experience: ['2012-2018: Editor at AcademicPress', '2019-현재: Lecturer at University'],
		projects: [],
		patents: [],
		books: ['Academic Writing Handbook (2016)'],
		awards: [],
		degrees: ['B.A. 2006 Oxford', 'M.A. 2009 Cambridge'],
		theses: [],
		coursesTaught: ['ENG10 학술 영어'],
	},
}

// Professor modal elements
const profModalOverlay = document.getElementById('prof-modal-overlay')
const profCloseBtn = document.getElementById('close-prof-modal')

// ========== 시스템 설정 객체 ==========
const systemConfig = {
	registrationStartDate: new Date(2026, 4, 20), // 2026년 5월 20일
	registrationEndDate: new Date(2026, 5, 10), // 2026년 6월 10일
	isRegistrationOpen: () => {
		const now = new Date()
		return now >= systemConfig.registrationStartDate && now <= systemConfig.registrationEndDate
	},
}

const timetable = document.getElementById('timetable')
timetable.style.position = 'relative'
const timeLabels = Array.from({ length: 10 }, (_, i) => `${9 + i}:00`)

const parseTime = (timeString) => {
	const [hour, minute] = timeString.split(':').map(Number)
	return hour * 60 + minute
}

const formatTime = (timeString) => {
	const [hour, minute] = timeString.split(':')
	return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`
}

const getScheduleSegments = (scheduleString) => {
	return scheduleString.split(';').map((entry) => {
		const [day, start, end] = entry.split(',').map((value) => value.trim())
		return {
			day,
			start: parseTime(start),
			end: parseTime(end),
			startLabel: start,
			endLabel: end,
		}
	})
}

const occupiedSegments = {}

// 시간표 드롭 존 생성 (월-금, 9:00-19:00)
for (let row = 0; row < timeLabels.length; row++) {
	const labelCell = document.createElement('div')
	labelCell.className = 'time-slot'
	labelCell.innerHTML = `<span>${timeLabels[row]}</span>`
	timetable.appendChild(labelCell)

	for (let col = 2; col <= 6; col++) {
		const zone = document.createElement('div')
		zone.className = 'drop-zone'
		zone.dataset.day = col
		zone.dataset.hour = 9 + row
		zone.style.position = 'relative'
		timetable.appendChild(zone)
	}
}

// --- 2. 드래그 & 드롭 이벤트 처리 ---
let draggedCard = null
const totalCreditsEl = document.getElementById('total-credits')
let activeCredits = 0
let registeredCourses = {} // 수강 강좌 저장 (시간 충돌 방지)

document.querySelectorAll('.course-card').forEach((card) => {
	card.addEventListener('dragstart', (e) => {
		draggedCard = card
		e.dataTransfer.setData('text/plain', card.dataset.id)
		card.style.opacity = '0.5'
	})

	card.addEventListener('dragend', () => {
		card.style.opacity = '1'
		document
			.querySelectorAll('.drop-zone, .reserve-zone')
			.forEach((z) => z.classList.remove('drag-over'))
	})
})

// 시간표 드롭 존 이벤트 설정
document.querySelectorAll('.drop-zone').forEach((zone) => {
	zone.addEventListener('dragover', (e) => {
		e.preventDefault()
		zone.classList.add('drag-over')
	})

	zone.addEventListener('dragleave', () => {
		zone.classList.remove('drag-over')
	})

	zone.addEventListener('drop', (e) => {
		e.preventDefault()
		zone.classList.remove('drag-over')

		if (!draggedCard) return

		const courseId = draggedCard.dataset.id
		const courseName = draggedCard.dataset.name
		const courseProf = draggedCard.dataset.prof
		const credits = parseInt(draggedCard.dataset.credit)
		const scheduleEntries = getScheduleSegments(draggedCard.dataset.schedule)

		// 이미 등록된 강좌인지 확인
		if (registeredCourses[courseId]) {
			alert('이 강좌는 이미 시간표에 추가되었습니다!')
			return
		}

		let hasConflict = false
		const courseSegments = []

		scheduleEntries.forEach((entry) => {
			const startHour = Math.floor(entry.start / 60)
			const endHour = Math.ceil(entry.end / 60)
			let entryConflict = false

			for (let hour = startHour; hour < endHour; hour++) {
				const segmentStart = hour === startHour ? entry.start % 60 : 0
				const segmentEnd = hour === endHour - 1 ? entry.end % 60 || 60 : 60
				if (segmentStart >= segmentEnd) continue

				const dayHourKey = `${entry.day}-${hour}`
				const existing = occupiedSegments[dayHourKey] || []
				const seg = { start: segmentStart, end: segmentEnd, courseId }

				if (
					existing.some(
						(existingSeg) => existingSeg.start < seg.end && seg.start < existingSeg.end,
					)
				) {
					hasConflict = true
					entryConflict = true
				}
			}

			if (!entryConflict) {
				courseSegments.push({
					day: entry.day,
					start: entry.start,
					end: entry.end,
					startHour,
					endHour,
					label: `${entry.startLabel} — ${entry.endLabel}`,
				})
			}
		})

		if (hasConflict) {
			alert('시간표 충돌! 다른 강좌의 시간을 확인해주세요.')
		}

		const firstZone = document.querySelector('.drop-zone[data-day="2"][data-hour="9"]')
		const hourHeight = firstZone ? firstZone.getBoundingClientRect().height : 0

		courseSegments.forEach((segment) => {
			const startZone = document.querySelector(
				`.drop-zone[data-day="${segment.day}"][data-hour="${segment.startHour}"]`,
			)
			if (!startZone) return

			const left = startZone.offsetLeft
			const top = startZone.offsetTop + ((segment.start % 60) / 60) * hourHeight
			const width = startZone.getBoundingClientRect().width
			const height = ((segment.end - segment.start) / 60) * hourHeight

			// Xác định trạng thái khóa học
			const course = courseLookup[courseId]
			const isFull = course && course.students >= course.capacity
			const statusClass = isFull ? 'full' : 'unregistered'

			const placed = document.createElement('div')
			placed.className = `placed-course ${statusClass}`
			placed.dataset.courseId = courseId
			placed.style.position = 'absolute'
			placed.style.left = `${left + 2}px`
			placed.style.top = `${top + 2}px`
			placed.style.width = `${width - 4}px`
			placed.style.height = `${height - 4}px`
			placed.innerHTML = `
				<div class="title">${courseName}</div>
				<div class="details">${courseProf}</div>
				<div class="details">${segment.label}</div>
				<div class="remove-btn" onclick="removeCourse('${courseId}')">×</div>
				<button class="action-btn quick-register-btn" onclick="quickRegisterCourse('${courseId}')">신청</button>
				<button class="action-btn cancel-btn" onclick="cancelCourse('${courseId}')">Hủy</button>
			`
			placed.getElementsByClassName('title')[0].addEventListener('click', () => {
				openCourseModal(courseId)
			})
			timetable.appendChild(placed)

			for (let hour = segment.startHour; hour < segment.endHour; hour++) {
				const dayHourKey = `${segment.day}-${hour}`
				occupiedSegments[dayHourKey] = occupiedSegments[dayHourKey] || []
				occupiedSegments[dayHourKey].push({
					start: hour === segment.startHour ? segment.start % 60 : 0,
					end: hour === segment.endHour - 1 ? segment.end % 60 || 60 : 60,
					courseId,
				})
			}
		})

		registeredCourses[courseId] = courseSegments
		activeCredits += credits
		totalCreditsEl.textContent = activeCredits
	})
})

// 시간표에서 강좌 삭제
window.removeCourse = function (courseId) {
	const segments = registeredCourses[courseId]
	if (segments) {
		segments.forEach((segment) => {
			timetable
				.querySelectorAll(`.placed-course[data-course-id="${courseId}"]`)
				.forEach((node) => node.remove())
			for (let hour = segment.startHour; hour < segment.endHour; hour++) {
				const dayHourKey = `${segment.day}-${hour}`
				occupiedSegments[dayHourKey] = (occupiedSegments[dayHourKey] || []).filter(
					(item) => item.courseId !== courseId,
				)
			}
		})

		const originalCard = document.querySelector(`.course-card[data-id="${courseId}"]`)
		if (originalCard) {
			activeCredits -= parseInt(originalCard.dataset.credit)
			totalCreditsEl.textContent = activeCredits
		}
		delete registeredCourses[courseId]
	}
}

// Đăng kí nhanh khóa học
window.quickRegisterCourse = function (courseId) {
	const placed = document.querySelectorAll(`.placed-course[data-course-id="${courseId}"]`)
	if (placed) {
		placed.forEach((element) => {
			element.classList.remove('unregistered', 'full')
			element.classList.add('registered')
		})
	}
}

// Hủy đăng kí khóa học
window.cancelCourse = function (courseId) {
	const course = courseLookup[courseId]
	const placed = document.querySelectorAll(`.placed-course[data-course-id="${courseId}"]`)
	if (placed) {
		const isFull = course && course.students >= course.capacity
		placed.forEach((element) => {
			element.classList.remove('registered')
			element.classList.add(isFull ? 'full' : 'unregistered')
		})
	}
}

// --- 3. 예비 강좌 영역 처리 (오른쪽 사이드바) ---
const reserveZone = document.getElementById('reserve-zone')

reserveZone.addEventListener('dragover', (e) => {
	e.preventDefault()
	reserveZone.classList.add('drag-over')
})

reserveZone.addEventListener('dragleave', () => {
	reserveZone.classList.remove('drag-over')
})

reserveZone.addEventListener('drop', (e) => {
	e.preventDefault()
	reserveZone.classList.remove('drag-over')

	if (!draggedCard) return

	const courseId = draggedCard.dataset.id
	const courseName = draggedCard.dataset.name
	const courseProf = draggedCard.dataset.prof
	const courseTime = draggedCard.dataset.time

	// 예비 목록에 중복이 있는지 확인
	if (reserveZone.querySelector(`[data-reserve-id="${courseId}"]`)) {
		alert('이 강좌는 이미 예비 목록에 있습니다!')
		return
	}

	// 예비 강좌 카드 생성
	const reserveCard = document.createElement('div')
	reserveCard.className = 'reserve-card'
	reserveCard.setAttribute('data-reserve-id', courseId)
	reserveCard.innerHTML = `
                <div class="remove-btn" onclick="this.parentElement.remove()">×</div>
                <div class="name">${courseName}</div>
                <div class="meta">${courseId} | ${courseProf}</div>
                <div class="meta" style="color:#888; margin-top:2px;">${courseTime}</div>
            `
	reserveCard.getElementsByClassName('name')[0].addEventListener('click', () => {
		openCourseModal(courseId)
	})

	reserveZone.appendChild(reserveCard)
})

// ========== 4. 배열 데이터로 강좌 렌더링 ==========

/**
 * 강좌 데이터로부터 카드 요소 생성
 */
function createCourseCardElement(course) {
	const cardDiv = document.createElement('div')
	cardDiv.className = 'course-card'
	cardDiv.draggable = true
	cardDiv.dataset.id = course.id
	cardDiv.dataset.name = course.name
	cardDiv.dataset.prof = course.professors.join(', ')
	cardDiv.dataset.time = course.time
	cardDiv.dataset.schedule = course.schedule
	cardDiv.dataset.credit = course.credits

	cardDiv.innerHTML = `
		<div class="course-header">
			<div class="course-code">${course.code} (${course.section})</div>
			<div class="course-classification">${course.classification}</div>
		</div>
		<div class="course-name">${course.name}</div>
		<div class="course-info">
			<span class="course-professor">${course.professors.join(', ')}</span>
			<span class="course-tag">${course.time}</span>
		</div>
	`

	return cardDiv
}

/**
 * coursesData 배열의 모든 강좌를 course-list에 렌더링
 */
function renderCoursesFromData() {
	const courseList = document.querySelector('.course-list')
	if (!courseList) return

	// 기존 강좌 삭제
	courseList.querySelectorAll('.course-card').forEach((card) => card.remove())

	// 배열에서 새로운 강좌 생성
	courseListData.forEach((course) => {
		const cardElement = createCourseCardElement(course)
		courseList.appendChild(cardElement)

		// 이벤트 리스너 연결
		addListener(cardElement, course)
	})
}

/**
 * 이벤트 리스너 연결
 */
function addListener(cardElement, course) {
	// 드래그 드롭 이벤트 리스너 연결
	cardElement.addEventListener('dragstart', (e) => {
		draggedCard = cardElement
		e.dataTransfer.setData('text/plain', cardElement.dataset.id)
		cardElement.style.opacity = '0.5'
	})

	cardElement.addEventListener('dragend', () => {
		cardElement.style.opacity = '1'
		document
			.querySelectorAll('.drop-zone, .reserve-zone')
			.forEach((z) => z.classList.remove('drag-over'))
	})

	cardElement.addEventListener('click', () => {
		openCourseModal(course.code)
	})
}

const modalOverlay = document.getElementById('course-modal-overlay')
const modalCloseBtn = document.getElementById('close-course-modal')
const syllabusButton = document.getElementById('modal-syllabus-btn')

function formatYears(years) {
	return Array.isArray(years) ? years.join(' \\ ') : years || ''
}

function createChips(items) {
	if (!Array.isArray(items) || items.length === 0) return ''
	return items
		.map((item) => {
			// item may be a string like 'Kim T.A (Kim Tae-hyun)'
			const display = typeof item === 'string' ? item : item.name || String(item)
			return `<span class="course-modal-chip">${display}</span>`
		})
		.join('')
}

function openCourseModal(courseCode) {
	const course = courseLookup[courseCode]
	if (!course || !modalOverlay) return

	document.getElementById('modal-course-code').textContent = `${course.code} (${course.section})`
	document.getElementById('modal-course-classification').textContent = course.classification
	document.getElementById('modal-course-name').textContent = course.name
	document.getElementById('modal-course-credits').textContent = `${course.credits}`
	document.getElementById('modal-course-years').textContent = formatYears(course.eligibleYears)
	document.getElementById('modal-course-room').textContent = course.room || '-'
	document.getElementById('modal-course-enrollment').textContent =
		`${course.students} / ${course.capacity}`
	document.getElementById('modal-course-professors').innerHTML = createChips(course.professors)
	document.getElementById('modal-course-majors').innerHTML = createChips(course.majors)
	document.getElementById('modal-course-description').textContent = course.description || ''

	syllabusButton.onclick = () => {
		if (course.syllabusUrl) {
			window.open(course.syllabusUrl, '_blank', 'noopener')
		}
	}

	// attach click listeners to professor chips to open professor modal
	document.querySelectorAll('#modal-course-professors .course-modal-chip').forEach((el) => {
		const profName = el.textContent.trim()
		if (profName) {
			el.style.cursor = 'pointer'
			el.addEventListener('click', () => openProfessorModal(profName))
		}
	})

	modalOverlay.classList.remove('hidden')
}

function closeCourseModal() {
	if (!modalOverlay) return
	modalOverlay.classList.add('hidden')
}

if (modalCloseBtn) {
	modalCloseBtn.addEventListener('click', closeCourseModal)
}

if (modalOverlay) {
	modalOverlay.addEventListener('click', (event) => {
		if (event.target === modalOverlay) {
			closeCourseModal()
		}
	})
}

// ========== Notice modal logic (initialize once) ==========
const noticeModalOverlay = document.getElementById('notice-modal-overlay')
const openNoticeBtn = document.getElementById('open-notice-btn')
const closeNoticeBtn = document.getElementById('close-notice-modal')
const noticeTabs = document.querySelectorAll('.notice-tab-btn')

function openNoticeModal() {
	if (noticeModalOverlay) {
		noticeModalOverlay.classList.remove('hidden')
	}
}

function closeNoticeModal() {
	if (noticeModalOverlay) {
		noticeModalOverlay.classList.add('hidden')
	}
}

if (openNoticeBtn) {
	openNoticeBtn.addEventListener('click', openNoticeModal)
}

if (closeNoticeBtn) {
	closeNoticeBtn.addEventListener('click', closeNoticeModal)
}

if (noticeModalOverlay) {
	noticeModalOverlay.addEventListener('click', (event) => {
		if (event.target === noticeModalOverlay) {
			closeNoticeModal()
		}
	})
}

noticeTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const tabName = tab.getAttribute('data-tab')

		// Remove active class from all tabs and contents
		noticeTabs.forEach((t) => t.classList.remove('active'))
		document.querySelectorAll('.notice-tab-content').forEach((content) => {
			content.classList.add('hidden')
		})

		// Add active class to clicked tab and show corresponding content
		tab.classList.add('active')
		const contentId = `${tabName}-tab`
		const contentElement = document.getElementById(contentId)
		if (contentElement) {
			contentElement.classList.remove('hidden')
		}
	})
})

// ========== Professor modal logic ==========
function renderList(items) {
	if (!items || items.length === 0) return '<div style="color:#9aa6b3">없음</div>'
	return `<ul>${items.map((it) => `<li>${it}</li>`).join('')}</ul>`
}

function openProfessorModal(profKey) {
	const prof = professorProfiles[profKey]
	if (!prof || !profModalOverlay) return

	document.getElementById('prof-photo').src = prof.photo || ''
	document.getElementById('prof-name').textContent = prof.name || profKey
	document.getElementById('prof-title').textContent = prof.title || ''

	document.getElementById('prof-dept').textContent = prof.department || ''
	document.getElementById('prof-lab').textContent = prof.lab || ''
	document.getElementById('prof-contact').textContent = prof.phone || ''
	document.getElementById('prof-email').textContent = prof.email || ''
	document.getElementById('prof-research-areas').textContent = (prof.researchAreas || []).join(
		', ',
	)

	const content = document.getElementById('prof-tab-content')
	if (!content) return
	// default tab: experience
	content.innerHTML = renderList(prof.experience)

	// tab buttons
	document.querySelectorAll('#prof-tabs .prof-tab-btn').forEach((btn) => {
		btn.classList.remove('active')
		btn.addEventListener('click', () => {
			document
				.querySelectorAll('#prof-tabs .prof-tab-btn')
				.forEach((b) => b.classList.remove('active'))
			btn.classList.add('active')
			const tab = btn.dataset.tab
			switch (tab) {
				case 'experience':
					content.innerHTML = renderList(prof.experience)
					break
				case 'projects':
					content.innerHTML = renderList(prof.projects)
					break
				case 'patents':
					content.innerHTML = renderList(prof.patents)
					break
				case 'books':
					content.innerHTML = renderList(prof.books)
					break
				case 'awards':
					content.innerHTML = renderList(prof.awards)
					break
				case 'degrees':
					content.innerHTML = renderList(prof.degrees)
					break
				case 'theses':
					content.innerHTML = renderList(prof.theses)
					break
				case 'courses':
					content.innerHTML = renderList(prof.coursesTaught)
					break
				case 'reviews':
					content.innerHTML = ''
					break
				default:
					content.innerHTML = ''
			}
		})
	})

	profModalOverlay.classList.remove('hidden')
}

function closeProfessorModal() {
	if (!profModalOverlay) return
	profModalOverlay.classList.add('hidden')
}

if (profCloseBtn) profCloseBtn.addEventListener('click', closeProfessorModal)
if (profModalOverlay) {
	profModalOverlay.addEventListener('click', (e) => {
		if (e.target === profModalOverlay) closeProfessorModal()
	})
}

// DOM 로드 후 강좌 초기화
document.addEventListener('DOMContentLoaded', () => {
	renderCoursesFromData()
})
