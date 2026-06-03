var point = 300
document.getElementsByClassName('point')[0].textContent = point + ' P'

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
		students: 40,
		capacity: 40,
		description:
			'컴퓨터 과학의 기초가 되는 자료구조를 학습합니다. 배열, 연결 리스트, 스택, 큐 등을 다룹니다.',
		room: '18409',
		eligibleYears: ['1'],
		majors: ['컴퓨터공학', '소프트웨어', '데이터사이언스'],
		syllabusUrl: './ul03_0203016_r02.pdf',
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
		photo: 'https://static.vecteezy.com/system/resources/thumbnails/016/766/342/small_2x/happy-smiling-young-man-avatar-3d-portrait-of-a-man-cartoon-character-people-illustration-isolated-on-transparent-background-png.png',
		name: '김태현',
		title: '조교수',
		department: '시스템소프트웨어',
		lab: '18402',
		phone: '+82-2-1234-5678',
		email: 'taekim@hs.ac.kr',
		researchAreas: [
			'신뢰 안전 AI',
			'AI 보안 (AI Security)',
			'컴퓨터 포렌식(Computer Forensics)',
		],
		experience: [
			'2010.03-2015.02: 한국컴퓨터교육학회 이사',
			'2016.03-현재: 한신대학교 AISW대학 부교수',
		],
		projects: [
			'2018.09.-2020.08. (책임) 지능형 IoT에 적합한 이차식 문제 기반의 양극구조를 이용한 바이오암호시스템 연구, 한국연구재단, 학문후속세대양성사업(박사후국내연수)',
		],
		patents: ['2023 출원번호 10-2023-0171594, T-test 기반 정보 누수 탐지 분석 시스템'],
		books: [
			'2025 AI문학코딩: Creative 동화 작가의 상상공작소, 김애영 외 저, 한신대학교 디지털새싹사업단, 한국과학창의재단',
		],
		awards: ['2024 한신 AISW페스티벌, 윤병준 동상'],
		degrees: ['박사 20040826 대전대학교 일반대학원 컴퓨터공학과'],
		theses: [
			'2025.09 온디바이스 환경에서 생성형AI 기반 웹툰 콘텐츠 지원 저작권 기술에 관한 연구, 한국소프트웨어감정평가학회',
		],
		coursesTaught: ['2026-1학기 AI.SW개론', '2026-1학기 진로와상담'],
		reviews: [
			{
				id: 'review-kim-001',
				studentName: '익명',
				year: '2025-1학기',
				course: 'CS101 자료구조',
				rating: 5,
				comment: '교수님의 설명이 매우 명확하고 알기 쉬워요. 수강 강력 추천합니다!',
				likes: 24,
				dislikes: 1,
				date: '2025-06-01',
			},
			{
				id: 'review-kim-002',
				studentName: '익명',
				year: '2025-1학기',
				course: 'CS101 자료구조',
				rating: 4,
				comment: '이론 설명은 좋은데 실습이 좀 더 있으면 좋겠어요.',
				likes: 18,
				dislikes: 2,
				date: '2025-05-28',
			},
			{
				id: 'review-kim-003',
				studentName: '익명',
				year: '2024-2학기',
				course: 'CS101 자료구조',
				rating: 5,
				comment: '어려운 내용도 쉽게 이해할 수 있도록 가르쳐주셔서 감사합니다.',
				likes: 31,
				dislikes: 0,
				date: '2024-12-10',
			},
		],
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
				<button class="action-btn cancel-btn" onclick="cancelCourse('${courseId}')">취소</button>
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
	const credits = parseInt(draggedCard.dataset.credit)
	const scheduleEntries = getScheduleSegments(draggedCard.dataset.schedule)

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
				<button class="action-btn" onclick="this.parentElement.remove()">넣기</button>
            `
	reserveCard.getElementsByClassName('name')[0].addEventListener('click', () => {
		openCourseModal(courseId)
	})
	reserveCard.getElementsByClassName('action-btn')[0].addEventListener('click', () => {
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
				<button class="action-btn cancel-btn" onclick="cancelCourse('${courseId}')">취소</button>
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
		<div class="course-name">${course.name} <span>(${course.students}/${course.capacity})</span></div>
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
	document.getElementById('open-document-modal').onclick = () => {
		openDocumentModal(course.id)
	}

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

// Helper function to render reviews with like/dislike
function renderReviews(reviews, profName) {
	if (!reviews || reviews.length === 0) {
		return '<div style="color:#9aa6b3; padding: 20px;">강의평가가 아직 없습니다.</div>'
	}

	return reviews
		.map((review) => {
			const likeKey = `review-like-${review.id}`
			const dislikeKey = `review-dislike-${review.id}`
			const userLiked = localStorage.getItem(likeKey) === 'true'
			const userDisliked = localStorage.getItem(dislikeKey) === 'true'

			return `
                <div class="review-card">
                    <div class="review-header">
                        <div class="review-meta">
                            <span class="review-year">${review.year}</span>
                            <span class="review-course">${review.course}</span>
                        </div>
                        <div class="review-rating">
                            ${'⭐'.repeat(review.rating)}<span style="color:#666">${review.rating}/5</span>
                        </div>
                    </div>
                    <div class="review-comment">${review.comment}</div>
                    <div class="review-footer">
                        <div class="review-date">${review.date}</div>
                        <div class="review-actions">
                            <button class="review-btn like-btn" onclick="toggleReviewLike('${review.id}', '${profName}')" 
                                    style="${userLiked ? 'background-color: #0078d4; color: #fff;' : ''}">
                                👍 <span class="like-count">${review.likes + (userLiked ? 1 : 0)}</span>
                            </button>
                            <button class="review-btn dislike-btn" onclick="toggleReviewDislike('${review.id}', '${profName}')"
                                    style="${userDisliked ? 'background-color: #ff6b6b; color: #fff;' : ''}">
                                👎 <span class="dislike-count">${review.dislikes + (userDisliked ? 1 : 0)}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `
		})
		.join('')
}

// Toggle like for review
window.toggleReviewLike = function (reviewId, profName) {
	const likeKey = `review-like-${reviewId}`
	const dislikeKey = `review-dislike-${reviewId}`
	const isCurrentlyLiked = localStorage.getItem(likeKey) === 'true'

	if (isCurrentlyLiked) {
		localStorage.removeItem(likeKey)
	} else {
		localStorage.setItem(likeKey, 'true')
		localStorage.removeItem(dislikeKey)
	}

	// Re-render the reviews
	const prof = professorProfiles[profName]
	const content = document.getElementById('prof-tab-content')
	if (content) {
		content.innerHTML = renderReviews(prof.reviews, profName)
	}
}

// Toggle dislike for review
window.toggleReviewDislike = function (reviewId, profName) {
	const likeKey = `review-like-${reviewId}`
	const dislikeKey = `review-dislike-${reviewId}`
	const isCurrentlyDisliked = localStorage.getItem(dislikeKey) === 'true'

	if (isCurrentlyDisliked) {
		localStorage.removeItem(dislikeKey)
	} else {
		localStorage.setItem(dislikeKey, 'true')
		localStorage.removeItem(likeKey)
	}

	// Re-render the reviews
	const prof = professorProfiles[profName]
	const content = document.getElementById('prof-tab-content')
	if (content) {
		content.innerHTML = renderReviews(prof.reviews, profName)
	}
}

function openProfessorModal(profKey) {
	const prof = professorProfiles[profKey]
	if (!prof || !profModalOverlay) return

	document.getElementById('prof-photo').src = prof.photo || ''
	document.getElementById('prof-name').textContent = prof.name || profKey
	document.getElementById('prof-title').textContent = '직위: ' + (prof.title || '')

	document.getElementById('prof-dept').textContent = '전공: ' + (prof.department || '')
	document.getElementById('prof-lab').textContent = '연구실: ' + (prof.lab || '')
	document.getElementById('prof-contact').textContent = '연락처: ' + (prof.phone || '')
	document.getElementById('prof-email').textContent = '이메일: ' + (prof.email || '')
	document.getElementById('prof-research-areas').textContent =
		'연구분야: ' + (prof.researchAreas || []).join(', ')

	const content = document.getElementById('prof-tab-content')
	if (!content) return
	// default tab: experience
	content.innerHTML = renderList(prof.experience)

	// tab buttons
	document.querySelectorAll('#prof-tabs .prof-tab-btn').forEach((btn) => {
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
					content.innerHTML = renderReviews(prof.reviews, prof.name)
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
// ========== Document Modal ==========
function openDocumentModal(courseCode) {
	const course = courseLookup[courseCode]
	const documentModalOverlay = document.getElementById('document-modal-overlay')
	if (!course || !documentModalOverlay) return

	documentModalOverlay.classList.remove('hidden')
}

// ========== 5. 검색 및 필터 기능 ==========

// Helper function to extract day of week from schedule (1=월, 2=화, ..., 6=금)
const dayNames = {
	2: '월',
	3: '화',
	4: '수',
	5: '목',
	6: '금',
}

const reverseDayNames = {
	월: '2',
	화: '3',
	수: '4',
	목: '5',
	금: '6',
}

// Get unique values from courses for filter dropdowns
function getUniqueDaysOfWeek() {
	const days = new Set()
	courseListData.forEach((course) => {
		const segments = getScheduleSegments(course.schedule)
		segments.forEach((seg) => {
			days.add(dayNames[seg.day])
		})
	})
	return Array.from(days).sort((a, b) => {
		const order = ['월', '화', '수', '목', '금']
		return order.indexOf(a) - order.indexOf(b)
	})
}

function getUniqueClassifications() {
	const classifications = new Set()
	courseListData.forEach((course) => {
		classifications.add(course.classification)
	})
	return Array.from(classifications).sort()
}

function getUniqueYears() {
	const years = new Set()
	courseListData.forEach((course) => {
		course.eligibleYears.forEach((year) => {
			years.add(year)
		})
	})
	return Array.from(years).sort()
}

function getUniqueMajors() {
	const majors = new Set()
	courseListData.forEach((course) => {
		course.majors.forEach((major) => {
			majors.add(major)
		})
	})
	return Array.from(majors).sort()
}

// Initialize filter dropdowns
function initializeFilterDropdowns() {
	const daySelect = document.getElementById('filter-day')
	const classSelect = document.getElementById('filter-classification')
	const yearSelect = document.getElementById('filter-year')
	const majorSelect = document.getElementById('filter-major')

	// Populate dropdowns
	getUniqueDaysOfWeek().forEach((day) => {
		const option = document.createElement('option')
		option.value = day
		option.textContent = day
		daySelect.appendChild(option)
	})

	getUniqueClassifications().forEach((cls) => {
		const option = document.createElement('option')
		option.value = cls
		option.textContent = cls
		classSelect.appendChild(option)
	})

	getUniqueYears().forEach((year) => {
		const option = document.createElement('option')
		option.value = year
		option.textContent = year + '학년'
		yearSelect.appendChild(option)
	})

	getUniqueMajors().forEach((major) => {
		const option = document.createElement('option')
		option.value = major
		option.textContent = major
		majorSelect.appendChild(option)
	})
}

// Filter state
let currentSearchQuery = ''
let currentFilters = {
	days: [],
	classifications: [],
	years: [],
	majors: [],
}

// Search functionality
function performSearch(query) {
	currentSearchQuery = query.toLowerCase()
	applySearchAndFilter()
}

// Filter functionality
function performFilter(filters) {
	currentFilters = filters
	applySearchAndFilter()
}

// Combined search and filter
function applySearchAndFilter() {
	const courseList = document.querySelector('.course-list')
	if (!courseList) return

	// Get all course cards
	const allCourses = Object.values(courseLookup)

	// Filter courses based on search and filters
	const filteredCourses = allCourses.filter((course) => {
		// Search filter
		if (currentSearchQuery) {
			const matchesSearch =
				course.code.toLowerCase().includes(currentSearchQuery) ||
				course.name.toLowerCase().includes(currentSearchQuery) ||
				course.professors.some((prof) => prof.toLowerCase().includes(currentSearchQuery))

			if (!matchesSearch) return false
		}

		// Classification filter
		if (currentFilters.classifications.length > 0) {
			if (!currentFilters.classifications.includes(course.classification)) return false
		}

		// Year filter
		if (currentFilters.years.length > 0) {
			const hasMatchingYear = currentFilters.years.some((year) =>
				course.eligibleYears.includes(year),
			)
			if (!hasMatchingYear) return false
		}

		// Major filter
		if (currentFilters.majors.length > 0) {
			const hasMatchingMajor = currentFilters.majors.some((major) =>
				course.majors.includes(major),
			)
			if (!hasMatchingMajor) return false
		}

		// Day filter
		if (currentFilters.days.length > 0) {
			const courseSegments = getScheduleSegments(course.schedule)
			const hasMatchingDay = courseSegments.some((seg) => {
				const dayName = dayNames[seg.day]
				return currentFilters.days.includes(dayName)
			})
			if (!hasMatchingDay) return false
		}

		return true
	})

	// Clear existing cards
	courseList.querySelectorAll('.course-card').forEach((card) => card.remove())

	// Render filtered courses
	filteredCourses.forEach((course) => {
		const cardElement = createCourseCardElement(course)
		courseList.appendChild(cardElement)
		addListener(cardElement, course)
	})

	// Re-attach drag and drop events to new cards
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
}

// Filter modal handlers
function openFilterModal() {
	const filterModalOverlay = document.getElementById('filter-modal-overlay')
	if (filterModalOverlay) {
		filterModalOverlay.classList.remove('hidden')
	}
}

function closeFilterModal() {
	const filterModalOverlay = document.getElementById('filter-modal-overlay')
	if (filterModalOverlay) {
		filterModalOverlay.classList.add('hidden')
	}
}

function resetFilters() {
	document.getElementById('filter-day').selectedIndex = 0
	document.getElementById('filter-classification').selectedIndex = 0
	document.getElementById('filter-year').selectedIndex = 0
	document.getElementById('filter-major').selectedIndex = 0

	currentFilters = {
		days: [],
		classifications: [],
		years: [],
		majors: [],
	}

	applySearchAndFilter()
	closeFilterModal()
}

// DOM 로드 후 강좌 초기화
document.addEventListener('DOMContentLoaded', () => {
	renderCoursesFromData()

	// Initialize filter dropdowns
	initializeFilterDropdowns()

	// Search bar event listener
	const searchBar = document.getElementById('search-bar')
	if (searchBar) {
		searchBar.addEventListener('input', (e) => {
			performSearch(e.target.value)
		})
	}

	// Filter modal event listeners
	const openFilterBtn = document.getElementById('open-filter-btn')
	const closeFilterBtn = document.getElementById('close-filter-modal')
	const applyFiltersBtn = document.getElementById('apply-filters-btn')
	const resetFiltersBtn = document.getElementById('reset-filters-btn')
	const filterModalOverlay = document.getElementById('filter-modal-overlay')

	if (openFilterBtn) {
		openFilterBtn.addEventListener('click', openFilterModal)
	}

	if (closeFilterBtn) {
		closeFilterBtn.addEventListener('click', closeFilterModal)
	}

	if (applyFiltersBtn) {
		applyFiltersBtn.addEventListener('click', () => {
			const daySelect = document.getElementById('filter-day')
			const classSelect = document.getElementById('filter-classification')
			const yearSelect = document.getElementById('filter-year')
			const majorSelect = document.getElementById('filter-major')

			const selectedDays = Array.from(daySelect.selectedOptions).map((opt) => opt.value)
			const selectedClasses = Array.from(classSelect.selectedOptions).map((opt) => opt.value)
			const selectedYears = Array.from(yearSelect.selectedOptions).map((opt) => opt.value)
			const selectedMajors = Array.from(majorSelect.selectedOptions).map((opt) => opt.value)

			currentFilters = {
				days: selectedDays,
				classifications: selectedClasses,
				years: selectedYears,
				majors: selectedMajors,
			}

			applySearchAndFilter()
			closeFilterModal()
		})
	}

	if (resetFiltersBtn) {
		resetFiltersBtn.addEventListener('click', resetFilters)
	}

	if (filterModalOverlay) {
		filterModalOverlay.addEventListener('click', (e) => {
			if (e.target === filterModalOverlay) closeFilterModal()
		})
	}
})
