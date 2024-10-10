# Seminari 5: API REST 

## Descripción del Ejercicio

El objetivo de este ejercicio es gestionar las experiencias a las que se ha apuntado cada usuario mediante un vector de IDs en el campo usuario. Se implementarán funciones para añadir y quitar experiencias de este campo.

## Pasos a Seguir

1. **Crear un vector de IDs en el campo usuario**:
    - Añadir un vector de IDs en el modelo de usuario para almacenar las experiencias a las que se ha apuntado cada usuario.

2. **Implementar funciones para gestionar las experiencias**:
    - Crear una función para añadir experiencias al vector de IDs.
    - Crear una función para quitar experiencias del vector de IDs.

## Cambios Realizados

- **Modelo de Usuario**:
    - Se ha añadido un nuevo campo `experiencias` que es un vector de IDs.
    
- **Funciones**:
    - `addExperiencies(usuarioId, experienciaId)`: Añade una experiencia al vector de IDs del usuario.
    - `deleteExperiencies(usuarioId, experienciaId)`: Quita una experiencia del vector de IDs del usuario.