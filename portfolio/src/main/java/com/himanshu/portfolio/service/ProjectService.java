package com.himanshu.portfolio.service;

import org.springframework.stereotype.Service;

import com.himanshu.portfolio.entity.Project;
import com.himanshu.portfolio.repository.ProjectRepository;

import lombok.RequiredArgsConstructor;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {
	
	private final ProjectRepository projectRepository;
	
	public ProjectService(ProjectRepository projectRepository) {
		super();
		this.projectRepository = projectRepository;
	}

	public List<Project> getAllProjects(){
		return projectRepository.findAll();
	}
	
	public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Project not found with id: " + id));
    }
	
	public Project saveProject(Project project) {
		return projectRepository.save(project);
	}
	public void deleteProject(Long id) {
		projectRepository.deleteById(id);
	}
}
